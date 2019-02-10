import io from 'socket.io-client';
import { SERVER_URL } from './config';

const ROOM_ID = window.location.pathname.split(`/`)[2];

export default io(`${SERVER_URL}/game`, {query: {roomID: ROOM_ID}});