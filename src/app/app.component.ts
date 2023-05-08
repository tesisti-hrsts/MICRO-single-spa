import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'angular-app';
	angularImgUrl = assetUrl("images/angular.png");

	clicked: boolean = false;
	count: number = 0;

	ngOnInit(): void {
		window.addEventListener('buttonPlus', () => {
			this.count += 1
		});
		window.addEventListener('buttonMinus', () => {
			if (this.count > 0)
				this.count -= 1
		});
	}

	enableDisable(): void {
		this.clicked = !this.clicked;
	}
}
