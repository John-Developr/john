import React, { Component } from 'react';

import styles from "@/styles/projects.module.css";
import Layout, { PageWrapper } from '@/helpers/layout';
import NextArrow from '@/helpers/nextArrow';
import MansoryLayout from '@/helpers/mansory';
import MansoryItem from '@/helpers/mansory/mansory-item';
import Footer from '@/components/footer';
import { ProjectsContext } from '@/utils/context';
import { capitalizeFirstLetter } from '@/utils/stringUtils';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  github: string;
  about: string;
  type: string[];
  technologies: string[];
}

interface ProjectsState {
  filtered: string;
  filterData: string[];
  mansoryKey: number; 
}

class Projects extends Component<{}, ProjectsState> {
  static contextType = ProjectsContext;

  constructor(props: {}) {
    super(props);
    this.state = {
      filtered: '',
      filterData: [
        'all',
        'projects',
        'thesis',
        'practice',
        'other'
      ],
      mansoryKey: 0
    };
  }

  setFiltered = (filter: string) => {
    this.setState({ filtered: filter });
  };

  filterProjects = (projectsData: Project[]) => {
    const { filtered } = this.state;

    if (filtered === 'all' || !filtered) {
      return projectsData;
    }

    return projectsData.filter(projects => projects.type.includes(filtered));
  };

  componentDidMount() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      this.setState(prevState => ({ filtered: hash.toLowerCase() }));
    }
  }

  render() {
    const projectsData = this.context as Project[];
    const { filtered, filterData, mansoryKey } = this.state;

    const filteredProjects = this.filterProjects(projectsData);

    return (
      <Layout title="Projects">
        <PageWrapper title="Projects">
          <br />
          <div className={styles['filter-action']}>
            {filterData.map((value, index) => (
              <a
                key={index}
                href={`#${value}`}
                onClick={() => this.setFiltered(value)}
                className={value === filtered ? styles['active'] : ''}
                id="cardHover"
              >
                {capitalizeFirstLetter(value)}
              </a>
            ))}
          </div>
          <div>
            <MansoryLayout>
              {filteredProjects.map((item, index) => (
                <MansoryItem key={index} item={item} />
              ))}
            </MansoryLayout>
          </div>
          <br />
          <NextArrow path="/resume" text="Are you convinced to contact me now?" className="icon-after" />
          <Footer className="socials" />
        </PageWrapper>
      </Layout>
    );
  }
}

export default Projects;