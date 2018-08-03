import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlatformLocation } from '@angular/common' 

@Injectable()
export class RouterStateService {
    
    private history: string[] = [];
    private isBack: boolean;

    constructor(private router: Router, private location: PlatformLocation) { }
	
    public loadRouting(): void {
        
        this.router.events.subscribe((event) => {


        	if(event instanceof NavigationEnd)
            this.history = [...this.history, event.urlAfterRedirects ];
        		
        });

        this.location.onPopState(() => {
			    console.log('Back button pressed');
            this.isBack = true;
			  });

    }

    public getHistory(): string[] {
        return this.history;
    }

    public getDirection(page: string): string {
    	
        if (this.isBack) {
            // if (`/${page}` === this.history[this.history.length - 3]) {
            //     this.history.splice(this.history.length - 2, 2);
                this.isBack = false;
                return "b";
            // }
        }

        return "f";
    }
}
