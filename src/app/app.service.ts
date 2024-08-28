import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

export class AppService {
  selectedNode = signal<string>("")
  selectNode(node: string): void {
    this.selectedNode.set(node)
  }

  getselectedNode() {
    return this.selectedNode();
  }
}