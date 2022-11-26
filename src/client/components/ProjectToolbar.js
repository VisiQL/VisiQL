import React, { useState } from 'react';
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import SaveIcon from '@mui/icons-material/Save';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SaveProject from './SaveProject';
import ProjectSaved from './ProjectSaved';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const ProjectToolbar = (props) => {
  const [projectName, setProjectName] = useInput('');
  const [saveProjExpand, setSaveProjExpand] = useState(false);
  const [projectSaved, setProjectSaved] = useState(false);

  const saveProjectFunc = () => {
    if (projectName === '') return alert('Please enter a project name');
    if (
      props.schemaData === 'Enter a Postgres DB link to generate your schema...'
    )
      return alert('Please enter a database link to start your project');
    if (!props.currentUserId)
      return alert('You must be signed in to save a project');
    const body = {
      user: props.currentUserId,
      projectName: projectName,
      schemaData: props.schemaData,
      treeData: props.treeData,
    };
    console.log('post body', body);
    fetch('/projects/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('dbLink fetch /project/save: ERROR:', err));
    setProjectSaved(true);
    setSaveProjExpand(false);
  };
  const actions = [
    { icon: <DownloadIcon fontSize='large' />, name: 'Download' },
    {
      icon: <SaveIcon fontSize='large' />,
      name: 'Save Project',
    },
    { icon: <FolderOpenIcon fontSize='large' />, name: 'View Projects' },
  ];
  const actionSize = {
    width: 90,
    height: 90,
    tooltip: {
      fontSize: 90,
    },
  };
  const classes = {
    tooltip: {
      fontSize: 90,
    },
  };

  return (
    <div>
      <SpeedDial
        ariaLabel='SpeedDial openIcon example'
        sx={{
          '& .MuiFab-primary': {
            width: 100,
            height: 100,
            backgroundColor: '#ed6a5a',
            '&:hover': { backgroundColor: '#f1887b' },
          },
          position: 'absolute',
          bottom: 96,
          right: 66,
        }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            sx={actionSize}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            TooltipClasses={classes}
            onClick={() => {
              setSaveProjExpand(true);
            }}
          />
        ))}
      </SpeedDial>
      <SaveProject
        trigger={saveProjExpand}
        close={setSaveProjExpand}
        saveProjectFunc={saveProjectFunc}
        projectName={projectName}
        setProjectName={setProjectName}
      />
      <ProjectSaved trigger={projectSaved} close={setProjectSaved} />
    </div>
  );
};

export default ProjectToolbar;