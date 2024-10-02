import { environment } from '../../environoments/environoment';

export interface configs{
apiTitle:string;
apiUrl:string;
}

export const API_CONFIG:configs={
    apiTitle:environment.API_TITLE,
    apiUrl:environment.API_URL,
}   

