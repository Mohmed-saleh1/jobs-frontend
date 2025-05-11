import JobCard from "@/components/jobs/JobCard";
import { jobDemoData } from "@/data/jobs";

export default function JobsPage() {
  return (
    <div style={{ padding: '2rem', marginTop: '80px' }}>
      {jobDemoData.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
