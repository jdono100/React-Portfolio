import React, { useState } from 'react';
import Flickity from "react-flickity-component";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import content from '../content';

const proj = content.projects;

export default function Project() {
  const [tabIndex, setTabIndex] = useState(0);
  const flickityOptions = {
    initialIndex: 0,
    contain: false,
    prevNextButtons: true,
    pageDots: true,
    autoPlay: 3000,
    wrapAround: true
  };
  const trackerImageList = proj.priceTracker.images.map(image => {
    return <img src={image} key={image} alt= {''}/>
  });
  const calendaeImageList = proj.calendae.images.map(image => {
    return <img src={image} key={image} alt= {''}/>
  });
  const blogImageList = proj.techBlog.images.map(image => {
    return <img src={image} key={image} alt= {''}/>
  });
  return (
    <div className="text-center w-full md:w-3/5">
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>{proj.priceTracker.title}</Tab>
          <Tab>{proj.calendae.title}</Tab>
          <Tab>{proj.techBlog.title}</Tab>
        </TabList>
        <TabPanel>
          <Flickity  
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            >
            {trackerImageList}
          </Flickity>
          <p>{proj.priceTracker.description}</p>
          <p>Role: {proj.priceTracker.role}</p>
          <p>Tech Used: {proj.priceTracker.technologies}</p>
          <p className='space-x-2'>
            <a href={proj.priceTracker.github}>
              <FontAwesomeIcon icon={faGithub} size='2x'/>
            </a>
            <a href={proj.priceTracker.deployed}>
              <FontAwesomeIcon icon={faLink} size='2x'/>
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <Flickity  
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            >
            {calendaeImageList}
          </Flickity>
          <p>{proj.calendae.description}</p>
          <p>Role: {proj.calendae.role}</p>
          <p>Tech Used: {proj.calendae.technologies}</p>
          <p className='space-x-2'>
            <a href={proj.calendae.github}>
              <FontAwesomeIcon icon={faGithub} size='2x'/>
            </a>
            <a href={proj.calendae.deployed}>
              <FontAwesomeIcon icon={faLink} size='2x'/>
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <Flickity  
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            >
            {blogImageList}
          </Flickity>
          <p>{proj.techBlog.description}</p>
          <p>Role: {proj.techBlog.role}</p>
          <p>Tech Used: {proj.techBlog.technologies}</p>
          <p className='space-x-2'>
            <a href={proj.techBlog.github}>
              <FontAwesomeIcon icon={faGithub} size='2x'/>
            </a>
            <a href={proj.techBlog.deployed}>
              <FontAwesomeIcon icon={faLink} size='2x'/>
            </a>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};
