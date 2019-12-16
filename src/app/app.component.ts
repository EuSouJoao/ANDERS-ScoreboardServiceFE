import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface ScoreListing {
  name: string;
  score: number;
}

const MOCK_DATA: ScoreListing[] = [
  {name: 'Jon Doe', score: 1234},
  {name: 'Jane Doe', score: 2345},
  {name: 'James Doe', score: 3456},
  {name: 'Jim Doe', score: 4567},
  {name: 'Jeff Doe', score: 5678},
  {name: 'John Doe', score: 6789},
  {name: 'Jeniffer Doe', score: 7890},
  {name: 'Jules Doe', score: 8901}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  title = 'ScoreboardServiceFE';
  displayedColumns: string[] = ['name', 'score'];
  dataSource = new MatTableDataSource(MOCK_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
