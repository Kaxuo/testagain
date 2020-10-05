using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class ProjectModel
    {
        public ProjectModel()
        {
            Tasks = new List<TaskModel>();
        }
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<TaskModel> Tasks { get; set; }
    }
}