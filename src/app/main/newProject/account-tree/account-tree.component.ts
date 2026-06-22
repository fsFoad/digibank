import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem, TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { Constants } from '../../shared/constants/Constants';
import { DatasetService } from '../../shared/services/dataset.service';

interface AccData {
  level: 1 | 2 | 3;
  code?: string;
  title?: string;
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
export class AccountTreeComponent implements OnInit {
  active = false;
  nature: 'debtor' | 'creditor' | 'not-important' = 'not-important';
  accounts: TreeNode[] = [];
  form: FormGroup;
  selectedNode: TreeNode<AccData>;
  ngDestroy$ = new Subject<void>();
  contextMenuItems: MenuItem[] = Constants.accountTree_contextMenuItems;
  constructor(private fb: FormBuilder, private datasetService: DatasetService) {
    this.form = fb.group({
      level: [0],
      code: ['0'],
      title: [''],
      active: [false],
      nature: ['not-important'],
    });
  }

  ngOnInit(): void {
    this.datasetService.loadRaw('account-tree-base-accounts', []).then((baseAccounts: [string, string][]) => {
      this.accounts = createAccountsFromBase(baseAccounts);
    });
  }

  onNodeSelect(e: TreeNodeSelectEvent<AccData>): void {
    if (e.node.data) {
      this.form.enable();
      this.form.setValue(e.node.data);
    } else {
      this.form.setValue(createDefaultData());
      this.form.disable();
    }
  }

  save(): void {
    const node = this.selectedNode;
    if (node?.data) {
      node.data = this.form.value;
      node.label = `${node.data.code} - ${node.data.title}`;
    }
  }

  addNode(e: any): void {
    const parent = this.selectedNode;
    let level: 1 | 2 | 3;
    let code: string;
    if (!parent.data) {
      level = 1;
      code = '10';
    } else if (parent.data.level === 1) {
      level = 2;
      code = '1000';
    } else if (parent.data.level === 2) {
      level = 3;
      code = '1000';
    } else {
      console.log('cannot add');
      return;
    }
    const newNode = createNode(code, 'جدید', level, parent);
    parent.children = [...(parent.children || []), newNode];
    parent.expanded = true;
    this.selectedNode = newNode;
    this.form.setValue(newNode.data);
  }
}

function createNode(code: string, title: string, level?: 1 | 2 | 3, parent?: TreeNode<AccData>): TreeNode<AccData> {
  return {
    parent,
    label: `${code} - ${title}`,
    data: { ...createDefaultData(), code, title, level },
  };
}

function createDefaultData(): AccData {
  return {
    level: 1,
    code: '',
    title: '',
    active: false,
    nature: 'not-important',
  };
}

function createAccountsFromBase(baseAccounts: [string, string][]): TreeNode<AccData>[] {
  const root: TreeNode<AccData> = {
    label: 'حسابها',
    expanded: true,
  };
  root.children = baseAccounts.map(x => {
    const node = createNode(x[0], x[1], 1, root);
    node.children = [createNode(
      '1000',
      'آزمایشی',
      2,
      node
    )];
    return node;
  });
  return [root];
}

