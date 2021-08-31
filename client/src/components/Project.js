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
    initialIndex: 1,
    autoPlay: 3000,
    wrapAround: true,
    prevNextButtons: false,
    contain: true
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
      <Tabs className='mx-auto text-yellow-300' selectedTabClassName='text-yellow-500 rounded-t-md bg-gray-500' selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>{proj.priceTracker.title}</Tab>
          <Tab>{proj.calendae.title}</Tab>
          <Tab>{proj.techBlog.title}</Tab>
        </TabList>
        <TabPanel>
          <Flickity  
            className={'carousel overflow-hidden'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            >
            {trackerImageList}
          </Flickity>
          <p className="text-yellow-500 text-sm mt-2">{proj.priceTracker.description}</p>
          <p className="text-yellow-600 text-sm mt-2">Role: {proj.priceTracker.role}</p>
          <p className="text-yellow-700 text-sm mt-2">Tech Used: {proj.priceTracker.technologies}</p>
          <p className='space-x-2 mt-2'>
            <a rel="noreferrer" className='text-gray-600 hover:text-gray-400' target='_blank' href={proj.priceTracker.github}>
              <FontAwesomeIcon icon={faGithub} size='2x'/>
            </a>
            <a rel="noreferrer" className='text-gray-600 hover:text-gray-400' target='_blank' href={proj.priceTracker.deployed}>
              <FontAwesomeIcon icon={faLink} size='2x'/>
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <Flickity  
            className={'carousel overflow-hidden'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            >
            {calendaeImageList}
          </Flickity>
          <p className="text-sm mt-2">{proj.calendae.description}</p>
          <p className="text-sm mt-2">Role: {proj.calendae.role}</p>
          <p className="text-sm mt-2">Tech Used: {proj.calendae.technologies}</p>
          <p className='space-x-2 mt-2'>
            <a rel="noreferrer" className='text-gray-600 hover:text-gray-400' target='_blank' href={proj.calendae.github}>
              <FontAwesomeIcon icon={faGithub} size='2x'/>
            </a>
            <a rel="noreferrer" className='text-gray-600 hover:text-gray-400' target='_blank' href={proj.calendae.deployed}>
              <FontAwesomeIcon icon={faLink} size='2x'/>
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <Flickity  
            className={'carousel overflow-hidden'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            >
            {blogImageList}
          </Flickity>
          <p className="text-sm mt-2">{proj.techBlog.description}</p>
          <p className="text-sm mt-2">Role: {proj.techBlog.role}</p>
          <p className="text-sm mt-2">Tech Used: {proj.techBlog.technologies}</p>
          <p className='space-x-2 mt-2'>
            <a rel="noreferrer" className='text-gray-600 hover:text-gray-400' target='_blank' href={proj.techBlog.github}>
              <FontAwesomeIcon icon={faGithub} size='2x'/>
            </a>
            <a rel="noreferrer" className='text-gray-600 hover:text-gray-400' target='_blank' href={proj.techBlog.deployed}>
              <FontAwesomeIcon icon={faLink} size='2x'/>
            </a>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};
