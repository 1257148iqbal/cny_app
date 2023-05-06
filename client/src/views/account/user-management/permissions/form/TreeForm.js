/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import { ChevronRight, File, FileMinus, Plus } from 'react-feather';
import './TestForm.scss';
const icons = {
  check: <span></span>,
  // uncheck: <span><Square /></span>,
  halfCheck: <span></span>,

  expandClose: <Plus size={17} />,

  expandOpen: (
    <span>
      <FileMinus />
    </span>
  ),
  expandAll: (
    <span>
      <ChevronRight />
    </span>
  ),
  collapseAll: <span></span>,
  parentClose: <span></span>,
  parentOpen: <span></span>,
  leaf: (
    <span>
      <File />
    </span>
  )
};

const nodes = [
  {
    value: '/app',
    label: 'app',
    children: [
      {
        value: '/app/Http',
        label: 'Http',
        children: [
          {
            value: '/app/Http/Controllers',
            label: 'Controllers',
            children: [
              {
                value: '/app/Http/Controllers/WelcomeController.js',
                label: 'WelcomeController.js'
              }
            ]
          },
          {
            value: '/app/Http/routes.js',
            label: 'routes.js'
          }
        ]
      },
      {
        value: '/app/Providers',
        label: 'Providers',
        children: [
          {
            value: '/app/Http/Providers/EventServiceProvider.js',
            label: 'EventServiceProvider.js'
          }
        ]
      }
    ]
  },
  {
    value: '/config',
    label: 'config',
    children: [
      {
        value: '/config/app.js',
        label: 'app.js'
      },
      {
        value: '/config/database.js',
        label: 'database.js'
      }
    ]
  },
  {
    value: '/public',
    label: 'public',
    children: [
      {
        value: '/public/assets/',
        label: 'Welcome',
        children: [
          {
            value: '/public/assets/style.css',
            label: 'style.css'
          }
        ]
      },
      {
        value: '/public/index.html',
        label: 'index.html'
      }
    ]
  },
  {
    value: '/.env',
    label: '.env'
  },
  {
    value: '/.gitignore',
    label: '.gitignore'
  },
  {
    value: '/README.md',
    label: 'README.md'
  }
];

const TreeForm = ({ stepper, type, treeArray, title }) => {
  console.log(type);
  console.log(stepper);

  const [check, setCheck] = useState({
    checked: [],
    expanded: []
  });

  const onCheck = checked => {
    console.log(checked);

    setCheck({ checked });
  };

  const onExpand = expanded => {
    setCheck({ expanded });
  };
  return (
    <div>
      <h2>{title}</h2>
      {/* <div> {JSON.stringify( treeArray, null, 2 )}</div> */}

      <div className="container">
        <CheckboxTree
          icons={icons}
          nativeCheckboxes
          //noCascade
          optimisticToggle
          showNodeIcon
          expandOnClick
          //showExpandAll
          iconsClass="fa5"
          nodes={nodes}
          onCheck={onCheck}
          onExpand={onExpand}
          checked={check.checked}
          expanded={check.expanded}
          // onCheck={checked => check.setCheck( { checked } )}
          //onExpand={expanded => check.setCheck( { expanded } )}
        />
      </div>
    </div>
  );
};

export default TreeForm;
