import { Routes } from '@angular/router';

export const routes: Routes = [

    {path:'',redirectTo:'home',pathMatch:'full'},

    {
        path:'home',
        loadChildren:() =>
            import('./components/pages/home/home.component').then((m) => m.HomeComponent)
    },

    {
        path:'character-list',
        loadChildren:() => 
            import('./components/pages/characters/character-list/character-list.component').then((m) =>
            m.CharacterListComponent)
    },

    {
        path:'character-details/:id',
        loadChildren: () =>
            import('./components/pages/characters/character-details/character-details.component').then((m) =>
            m.CharacterDetailsComponent)
    }
];


