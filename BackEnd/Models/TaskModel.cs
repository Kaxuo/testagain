namespace BackEnd.Models
{
    public class TaskModel
    {
        public int TaskId { get; set; }
        public string Description { get; set; }
        public bool Completed { get; set; }
        public bool Importance { get; set; }
        public int UserId { get; set; }
        public int ProjectId { get; set; }
    }
}