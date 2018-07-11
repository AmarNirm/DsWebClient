import { IProject } from './IProject';

export class Project implements IProject {
    Name: string;
    UserReadebaleName: string;
    DbAddress: string;
    OptionalPicturePath: string;

    constructor() {
      this.Name = 'ProjectName';
      this.UserReadebaleName = 'Project User Readebale Name';
      this.DbAddress = 'DbAddress';
      this.OptionalPicturePath = 'OptionalPicturePath';
    }
}

