import { IAlgorithm } from "../model/IAlgorithm";
import { IProject } from "../model/IProject";

export interface ICommunicationManager {
    getProjects() : Array<IProject>;
    getAlgorithms() : Array<IAlgorithm>;
}

