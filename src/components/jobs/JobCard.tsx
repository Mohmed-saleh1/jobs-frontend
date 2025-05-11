import React from 'react';
import styles from './JobCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { IJobCardDataType } from '@/interface/interface';

const JobCard: React.FC<{ job: IJobCardDataType }> = ({ job }) => {
  return (
    <div className={styles.card}>
      {job.logo && (
        <div className={styles.logo}>
          <Image src={job.logo} alt={`${job.company} logo`} width={60} height={60} />
        </div>
      )}
      <div className={styles.content}>
        <Link href={job.route}>
          <h2 className={styles.title}>{job.title}</h2>
        </Link>
        <p className={styles.company}>{job.company} - <span className={styles.location}>{job.location}</span></p>
        <p className={styles.description}>{job.description}</p>
        <div className={styles.meta}>
          <span className={styles.posted}>{job.postedAt}</span>
          {job.salaryInfo && <span className={styles.salary}>{job.salaryInfo}</span>}
          {job.quickApply && <span className={styles.quickApply}>Quick Apply</span>}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
