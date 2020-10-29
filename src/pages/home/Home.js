import { isEmpty } from 'lodash';
import React from 'react';

import EmptyState from 'components/EmptyState/EmptyState';

import './Home.less';
import '../../assets/less/variables.less';
import '../../assets/less/tile.less';

function FavoriteList({ title, resource, itemUrl, emptyState }) {
  return (
    <>
      <div className='d-flex align-items-center m-b-20'>
        <p className='flex-fill f-500 c-black m-0'>{title}</p>
      </div>
      {!isEmpty(resource) && (
        <div className='list-group'>
          {resource.map((item) => (
            <a
              key={itemUrl(item)}
              className='list-group-item'
              href={itemUrl(item)}
            >
              <span className='btn-favourite m-r-5'>
                <i className='fa fa-star' />
              </span>
              {item.name}
              {item.is_draft && (
                <span className='label label-default m-l-5'>Unpublished</span>
              )}
            </a>
          ))}
        </div>
      )}
      {isEmpty(resource) && emptyState}
    </>
  );
}

function DashboardAndQueryFavoritesList() {
  return (
    <div className='tile'>
      <div className='t-body tb-padding'>
        <div className='row home-favorites-list'>
          <div className='col-sm-6 m-t-20'>
            <FavoriteList
              title='Favorite Dashboards'
              resource={[]}
              emptyState={
                <p>
                  <span className='btn-favourite m-r-5'>
                    <i className='fa fa-star' />
                  </span>
                  Favorite <a href='dashboards'>Dashboards</a> will appear here
                </p>
              }
            />
          </div>
          <div className='col-sm-6 m-t-20'>
            <FavoriteList
              title='Favorite Queries'
              resource={[]}
              emptyState={
                <p>
                  <span className='btn-favourite m-r-5'>
                    <i className='fa fa-star' />
                  </span>
                  Favorite <a href='queries'>Queries</a> will appear here
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className='home-page'>
      <div className='container'>
        <EmptyState
          header='Welcome 👋'
          description='Connect to bot data source, easily visualize and share your data'
          illustration='dashboard'
          helpLink='https://help.yellowmessenger.com/'
        />
        <DashboardAndQueryFavoritesList />
      </div>
    </div>
  );
}
