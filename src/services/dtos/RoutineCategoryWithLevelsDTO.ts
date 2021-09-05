import { RoutineCategory } from "src/models/RoutineCategory";
import { RoutineCategoryLevel } from "src/models/RoutineCategoryLevel";

export class RoutineCategoryWithLevelsDTO{
    public routineCategory: RoutineCategory;
    public routineCategoryLevels: RoutineCategoryLevel[];

    public constructor(data?:any){
        if(data){
            console.log(data);
            this.routineCategory = data.routineCategory;
            this.routineCategoryLevels = data.routineCategoryLevels;
            
        }
    }
}