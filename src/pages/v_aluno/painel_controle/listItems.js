import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Send';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import MinhasHoras from "../lista_horas/Dashboard"

import { Link } from 'react-router-dom';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem>
    <ListItem button component={Link} to="/minhas_horas">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
        <ListItemText primary="Minhas Atividades" />
    </ListItem>
    <ListItem button component={Link} to="/Dashboard">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Estatisticas" />
    </ListItem>
    <ListItem button component={Link} to="/cadastrar_hora">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Adicionar atividade" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Envio de horas</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Solicitar Avaliação" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CallReceivedIcon />
      </ListItemIcon>
      <ListItemText primary="Status de submissões" />
    </ListItem>
  </div>
);