import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Output() deleteRow = new EventEmitter<any>();
  @Output() updateRow = new EventEmitter<any>();

  currentPage: number = 1;
  itemsPerPage: number = 5;
  filterText: string = '';

  get filteredData(): any[] {
    if (!this.filterText.trim()) {
      return this.data;
    }
    return this.data.filter((item) =>
      item.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  onDelete(row: any): void {
    this.deleteRow.emit(row);
  }

  onUpdate(row: any): void {
    this.updateRow.emit(row);
  }
}
