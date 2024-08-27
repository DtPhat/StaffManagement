import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';

interface Node {
  name: string;
  children?: Node[];
  icon?: string;
}

const TREE_DATA: Node[] = [
  {
    name: 'Nhân sự',
    icon: 'person',
    children: [
      {
        name: 'Hồ sơ nhân viên',
        children: [
          { name: 'Quản lí thông báo cá nhân' },
          { name: 'Lý lịch công tác' },
          { name: 'Hồ sơ nhân viên nghỉ việc' }
        ],
      },
      {
        name: 'Quản lý công việc',
        children: [
          { name: 'Phân công công việc' },
          { name: 'Theo dõi tiến độ' },
          { name: 'Đánh giá hiệu suất' }
        ],
      },
    ],
  },
  {
    name: 'Bệnh nhân',
    icon: 'favorite',
    children: [
      {
        name: 'Placeholder',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
  {
    name: 'Tiếp nhận',
    icon: 'content_paste',
    children: [
      {
        name: 'Placeholder',
      },
    ],
  },
  {
    name: 'Sản phẩm',
    icon: 'inventory_2',
    children: [
      {
        name: 'Placeholder',
      },
    ],
  },
  {
    name: 'Báo cáo',
    icon: 'trending_up',
    children: [
      {
        name: 'Placeholder',
      },
    ],
  },
  {
    name: 'Thông báo',
    icon: 'send',
    children: [
      {
        name: 'Placeholder',
      },
    ],
  },


];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  icon?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StaffComponent,
    MatTreeModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _transformer = (node: Node, level: number): FlatNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      icon: node.icon // Include the icon property
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
}