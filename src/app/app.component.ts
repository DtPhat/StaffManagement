import { Component, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
import { StaffEditComponent } from './staff/staff-edit/staff-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StaffComponent,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    StaffEditComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedNode: string = ''
  constructor(private appService: AppService) {
    this.dataSource.data = TREE_DATA;
    effect(() => {
      this.selectedNode = this.appService.getselectedNode();
    });
  }
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

  hasChild = (_: number, node: FlatNode) => node.expandable;


  onLeafNodeClick(node: Node) {
    console.log('Node clicked:', node.name);
    switch (node.name) {
      case 'Quản lí thông tin cá nhân':
        this.appService.selectNode(node.name)
        break;
      default:
        this.appService.selectNode('None')
    }
  }

  isExpandableNodeSelected(node: Node): boolean {
    if (node.name === this.selectedNode) {
      return true;
    }
    if (node.children) {
      return node.children.some(child => this.isExpandableNodeSelected(child));
    }
    return false;
  }

  isLevelOneAndContainsSelectedNode(node: FlatNode): boolean {
    if (node.level !== 0) {
      return false;
    }
    // Checking if the node is expandable and if it matches the selectedNode
    return !!this.selectedNode && this.treeControl.getDescendants(node).some(descendant => descendant.name === this.selectedNode);
  }

}

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
          { name: 'Quản lí thông tin cá nhân' },
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
        name: 'Hồ sơ bệnh nhân',
        children: [
          { name: 'Quản lí hồ sơ bệnh nhân' },
          { name: 'Lịch sử khám bệnh' }
        ],
      },
      {
        name: 'Lịch khám',
        children: [
          { name: 'Đặt lịch khám' },
          { name: 'Quản lý lịch hẹn' }
        ],
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