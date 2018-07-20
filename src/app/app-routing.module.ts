import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModel } from "@angular/forms";

const appRoutes = [
    {path:'recipes', component: RecipesComponent},
    {path:'shopping-list', component: ShoppingListComponent},
{path:'', redirectTo:'/recipes', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}