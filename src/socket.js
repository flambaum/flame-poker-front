import io from 'socket.io-client';
import { SERVER_URL } from './config';

const SERVER = /*SERVER_URL || */window.location.pathname.split(`/`)[0];

const ROOM_ID = window.location.pathname.split(`/`)[2];

export default io(`${SERVER}/game`, {query: {roomID: ROOM_ID}});