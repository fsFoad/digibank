import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem, TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface AccData {
  type?: string;
  field1?: string;
  parentAccount?: string;
  parentCodeStr: string;
  fullCode: string;
  code?: string;
  title?: string;
  title2?: string;
  active?: boolean;
  nature?: string;
}

interface TreeNodeSelectEvent<TData> {
  node: TreeNode<TData>;
  originalEvent: Event;
}

@Component({
  selector: 'app-account-tree',
  templateUrl: './account-tree.component.html',
  styleUrls: ['./account-tree.component.scss']
})
export class AccountTreeComponent implements OnInit, OnDestroy {
  active = false;
  nature: 'debtor' | 'creditor' | 'not-important' = 'not-important';
  accounts: TreeNode[] = createSampleAccounts();
  form: FormGroup;
  selectedNode: TreeNode<AccData>;
  ngDestroy$ = new Subject<void>();
  contextMenuItems: MenuItem[] = [
    { label: 'افزودن', icon: 'pi pi-plus', command: (e) => this.addNode(e) }
  ];
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      type: [''],
      field1: [''],
      parentAccount: [''],
      parentCodeStr: [''],
      fullCode: [''],
      code: ['0'],
      title: [''],
      title2: [''],
      active: [false],
      nature: ['not-important'],
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.ngDestroy$)).subscribe(value => {
      if (this.selectedNode) {
        this.selectedNode.data = value;
        updateDynamicProperties(this.selectedNode);
        this.form.patchValue({
          fullCode: this.selectedNode.data.fullCode,
        }, { emitEvent: false, });
      }
    });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

  onNodeSelect(e: TreeNodeSelectEvent<AccData>): void {
    this.form.setValue(e.node.data);
  }

  addNode(e: any): void {
    const parent = this.selectedNode;
    const newNode = createNode('0', 'جدید', parent);
    parent.children = [...(parent.children || []), newNode];
    parent.expanded = true;
    this.selectedNode = newNode;
    this.form.setValue(newNode.data);
  }
}

function updateDynamicProperties(node: TreeNode<AccData>): void {
  const parentData = node.parent?.data;
  node.data.fullCode = filterJoin([parentData?.fullCode, node.data.code], '');
  node.label = filterJoin([node.data.fullCode, node.data?.title], ' - ');
  for (const child of (node.children || [])) {
    updateDynamicProperties(child);
  }
}

function filterJoin(items: any[], separator?: string, filter?: (x: any) => boolean): string {
  if (filter) {
    return items.filter(filter).join(separator);
  } else {
    return items.filter(x => x).join(separator);
  }
}


function createNode(code: string, title: string, parent?: TreeNode<AccData>): TreeNode<AccData> {
  const parentCodeStr = filterJoin([parent?.data?.parentCodeStr, parent?.data?.code], '');
  const node: TreeNode<AccData> = {
    parent,
    data: { ...createDefaultData(), code, title, parentCodeStr, },
  };
  node.label = filterJoin([filterJoin([parentCodeStr, code], ''), title], ' - ');
  return node;
}

function createDefaultData(): AccData {
  return {
    type: '',
    field1: '',
    parentAccount: '',
    parentCodeStr: '',
    fullCode: '',
    code: '',
    title: '',
    title2: '',
    active: false,
    nature: 'not-important',
  };
}

function createSampleAccounts(): TreeNode<AccData>[] {
  const root = createNode('', 'حسابها');
  root.expanded = true;
  root.children =
    [
      ['11', 'دارایی‌های جاری'],
      ['12', 'دارایی‌های غیر جاری'],
      ['21', 'بدهی‌های جاری'],
      ['22', 'بدهی‌های غیر جاری'],
      ['31', 'حقوق صاحبان سهام'],
      ['41', 'فروش و درآمدها'],
      ['51', 'بهای تمام شده کالای فروش رفته'],
      ['61', 'هزینه‌های فعالیت'],
      ['62', 'سایر هزینه‌ها و درآمدهای غیر عملیاتی'],
      ['91', 'حساب‌های انتظامی'],
    ].map(x => {
      const node = createNode(x[0], x[1], root);
      node.children = [createNode('0', 'آزمایشی', node)];
      return node;
    });
  return [root];
}

