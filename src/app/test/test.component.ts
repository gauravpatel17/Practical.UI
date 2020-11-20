import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  colors = [] as  any;
  displayedColumns: string[] = ['name', 'category', 'type', 'rgba', 'rgbaColor', 'hex', 'hexColor'];
	constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.get().subscribe((data)=>{  
			console.log(data);  
			this.colors = data;  
		})  
	}
}
