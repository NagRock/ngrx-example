import {Component} from '@angular/core';
import {EntityService} from './entity.service';
import {Entity} from "./model";
import {Observable} from "rxjs";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    selectedEntity$: Observable<Entity>;
    allEntities$: Observable<Entity[]>;

    constructor(private service: EntityService) {
        this.selectedEntity$ = service.selected$;
        this.allEntities$ = service.entities$;
    }

    addEntity(name: string) {
        this.service.addEntity(name);
    }

    addEntityWithDelay(name: string) {
        this.service.addEntityWithDelay(name);
    }

    removeEntity(id: string) {
        this.service.removeEntity(id);
    }

    selectEntity(entity: Entity) {
        this.service.selectEntity(entity)
    }
}
