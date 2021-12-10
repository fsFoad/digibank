import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem, TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface AccData {
  type?: string;
  field1?: string;
  parentAccount?: string;
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
      code: [''],
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
      }
    });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

  onNodeSelect(e: TreeNodeSelectEvent<AccData>): void {
    // this.selectedNode = e.node;
    if (!e.node.data) {
      e.node.data = createDefaultData();
    }
    this.form.setValue(e.node.data);
  }

  addNode(e: any): void {
    console.log('addNode', e);
    const newNode = {
      label: 'new node',
      data: createDefaultData(),
    };
    this.selectedNode.children = [...(this.selectedNode.children || []), newNode];
    this.selectedNode.expanded = true;
    this.selectedNode = newNode;
  }
}

function createDefaultData(): AccData {
  return {
    type: '',
    field1: '',
    parentAccount: '',
    code: '',
    title: '',
    title2: '',
    active: false,
    nature: 'not-important',
  };
}

function createSampleAccounts(): TreeNode<AccData>[] {
  return [
    {
      label: 'حسابها',
      expanded: true,
      children: [
        '۱۱ - دارایی‌های جاری',
        '۱۲ - دارایی‌های غیر جاری',
        '۲۱ - بدهی‌های جاری',
        '۲۲ - بدهی‌های غیر جاری',
        '۳۱ - حقوق صاحبان سهام',
        '۴۱ - فروش و درآمدها',
        '۵۱ - بهای تمام شده کالای فروش رفته',
        '۶۱ - هزینه‌های فعالیت',
        '۶۲ - سایر هزینه‌ها و درآمدهای غیر عملیاتی',
        '۹۱ - حساب‌های انتظامی',
      ].map(x => (
        {
          label: x,
          children: [
            {
              label: 'آزمایشی',
            }
          ]
        }
      ))
    }
  ];
}

