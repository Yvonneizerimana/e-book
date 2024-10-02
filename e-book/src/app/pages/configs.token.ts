import { InjectionToken } from "@angular/core";
import {API_CONFIG, configs} from '../services/configuration.service'

export const API_CONFIG_TOKEN= new InjectionToken<configs>('API_CONFIG_TOKEN');
