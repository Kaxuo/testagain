import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/Models/Project';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  loading: boolean;
  projects: Project[];
  completedTasks: number;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loading = false;
    this.projectService
      .getAllProjects()
      .pipe(take(1))
      .subscribe((projects: Project[]) => {
        this.projects = projects;
        this.loading = false;
      });
  }

  deleteProject(element) {
    this.projectService
      .deleteProject(element.id)
      .pipe(take(1))
      .subscribe(
        (res) =>
          (this.projects = this.projects.filter(
            (projects) => projects.id != element.id
          ))
      );
  }
}