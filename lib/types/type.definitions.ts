// NodeJS standard library modules
import { Server } from 'https';

// NPM packages
import { Application } from "express";
import SocketIO from 'socket.io';

// Custom Modules
import Socket from '../modules/socket';

// Type definitions for HTTPS modules
export type DIAMANTE_HTTPS_PROTOCOL = Server;
export type DIAMANTE_APPLICATION = Application;
export interface httpsConfig {
    key: Buffer,
    cert: Buffer
};

// Type definitions for Socket Connections
export type DIAMANTE_SECURE_SOCKET = SocketIO.Server;
export type SOCKET_COMMUNICATION = Socket;