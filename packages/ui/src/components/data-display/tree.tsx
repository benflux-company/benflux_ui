"use client"

import * as React from "react"

import { ChevronRight, File, Folder, FolderOpen } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface TreeDataNode {
  key: string
  title: React.ReactNode
  children?: TreeDataNode[]
  disabled?: boolean
  icon?: React.ReactNode
  isLeaf?: boolean
  checkable?: boolean
}

interface TreeProps {
  treeData: TreeDataNode[]
  selectedKeys?: string[]
  checkedKeys?: string[]
  expandedKeys?: string[]
  defaultExpandedKeys?: string[]
  defaultSelectedKeys?: string[]
  defaultCheckedKeys?: string[]
  checkable?: boolean
  selectable?: boolean
  showIcon?: boolean
  showLine?: boolean
  onSelect?: (keys: string[], node: TreeDataNode) => void
  onCheck?: (keys: string[]) => void
  onExpand?: (keys: string[]) => void
  className?: string
}

function Tree({
  treeData,
  selectedKeys: externalSelected,
  checkedKeys: externalChecked,
  expandedKeys: externalExpanded,
  defaultExpandedKeys = [],
  defaultSelectedKeys = [],
  defaultCheckedKeys = [],
  checkable = false,
  selectable = true,
  showIcon = true,
  showLine = false,
  onSelect,
  onCheck,
  onExpand,
  className,
}: TreeProps) {
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>(defaultSelectedKeys)
  const [checkedKeys, setCheckedKeys] = React.useState<string[]>(defaultCheckedKeys)
  const [expandedKeys, setExpandedKeys] = React.useState<string[]>(defaultExpandedKeys)

  const resolvedSelected = externalSelected ?? selectedKeys
  const resolvedChecked = externalChecked ?? checkedKeys
  const resolvedExpanded = externalExpanded ?? expandedKeys

  const handleSelect = (node: TreeDataNode) => {
    if (!selectable || node.disabled) return
    const next = resolvedSelected.includes(node.key)
      ? resolvedSelected.filter((k) => k !== node.key)
      : [node.key]
    setSelectedKeys(next)
    onSelect?.(next, node)
  }

  const handleCheck = (node: TreeDataNode) => {
    if (node.disabled) return
    const next = resolvedChecked.includes(node.key)
      ? resolvedChecked.filter((k) => k !== node.key)
      : [...resolvedChecked, node.key]
    setCheckedKeys(next)
    onCheck?.(next)
  }

  const handleExpand = (key: string) => {
    const next = resolvedExpanded.includes(key)
      ? resolvedExpanded.filter((k) => k !== key)
      : [...resolvedExpanded, key]
    setExpandedKeys(next)
    onExpand?.(next)
  }

  return (
    <div className={cn("select-none", className)}>
      {treeData.map((node) => (
        <TreeNode
          key={node.key}
          node={node}
          depth={0}
          selectedKeys={resolvedSelected}
          checkedKeys={resolvedChecked}
          expandedKeys={resolvedExpanded}
          checkable={checkable}
          showIcon={showIcon}
          showLine={showLine}
          onSelect={handleSelect}
          onCheck={handleCheck}
          onExpand={handleExpand}
        />
      ))}
    </div>
  )
}

interface TreeNodeProps {
  node: TreeDataNode
  depth: number
  selectedKeys: string[]
  checkedKeys: string[]
  expandedKeys: string[]
  checkable: boolean
  showIcon: boolean
  showLine: boolean
  onSelect: (node: TreeDataNode) => void
  onCheck: (node: TreeDataNode) => void
  onExpand: (key: string) => void
}

function TreeNode({
  node,
  depth,
  selectedKeys,
  checkedKeys,
  expandedKeys,
  checkable,
  showIcon,
  showLine,
  onSelect,
  onCheck,
  onExpand,
}: TreeNodeProps) {
  const hasChildren = !!node.children?.length
  const isExpanded = expandedKeys.includes(node.key)
  const isSelected = selectedKeys.includes(node.key)
  const isChecked = checkedKeys.includes(node.key)

  return (
    <div>
      <div
        className={cn(
          "group flex items-center gap-1 rounded-md py-0.5 pr-2 text-sm transition-colors",
          depth > 0 && "relative",
          isSelected && "bg-primary/10 text-primary",
          node.disabled && "opacity-40",
        )}
        style={{ paddingLeft: `${depth * 20 + 4}px` }}
      >
        {/* Expand toggle */}
        <button
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-accent hover:text-foreground",
            !hasChildren && "invisible",
          )}
          onClick={() => hasChildren && onExpand(node.key)}
        >
          <ChevronRight
            className={cn("h-3.5 w-3.5 transition-transform", isExpanded && "rotate-90")}
          />
        </button>

        {/* Checkbox */}
        {checkable && (
          <input
            type="checkbox"
            checked={isChecked}
            disabled={node.disabled}
            onChange={() => onCheck(node)}
            className="h-3.5 w-3.5 shrink-0 rounded border-border accent-primary"
          />
        )}

        {/* Icon */}
        {showIcon && (
          <span className="shrink-0 text-muted-foreground">
            {node.icon ??
              (hasChildren ? (
                isExpanded ? (
                  <FolderOpen className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Folder className="h-4 w-4 text-yellow-500" />
                )
              ) : (
                <File className="h-4 w-4" />
              ))}
          </span>
        )}

        {/* Label */}
        <span
          onClick={() => onSelect(node)}
          className={cn(
            "flex-1 cursor-pointer rounded px-1 py-0.5 hover:bg-accent",
            isSelected && "font-medium",
            node.disabled && "cursor-not-allowed",
          )}
        >
          {node.title}
        </span>
      </div>

      {hasChildren && isExpanded && (
        <div>
          {node.children!.map((child) => (
            <TreeNode
              key={child.key}
              node={child}
              depth={depth + 1}
              selectedKeys={selectedKeys}
              checkedKeys={checkedKeys}
              expandedKeys={expandedKeys}
              checkable={checkable}
              showIcon={showIcon}
              showLine={showLine}
              onSelect={onSelect}
              onCheck={onCheck}
              onExpand={onExpand}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export { Tree }
export type { TreeProps, TreeDataNode }
