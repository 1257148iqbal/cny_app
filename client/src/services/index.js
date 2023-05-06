import axios from 'axios';
import { baseUrl } from '../utility/enums';

const { REACT_APP_MERCHANDISING_BASE_URL, REACT_APP_MERCHANDISING_URL } = process.env;

export const baseAxios = axios.create( {
  baseURL: baseUrl
} );

// axios instance for merchandising module
export const merchandisingAxiosInstance = axios.create( {
  baseURL: REACT_APP_MERCHANDISING_BASE_URL
} );

// axios merchandising
export const merchandisingAxios = axios.create( {
  baseURL: REACT_APP_MERCHANDISING_URL
} );

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjlKcXJUOFFFYWdQZ0lsdE9UOHE5cHciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2Njk4NzE4MTcsImV4cCI6MTY2OTg4OTgxNywiaXNzIjoiaHR0cDovL3F1YWRyaW9udGVjaC0wMDEtc2l0ZTIubXlzaXRlcGFuZWwubmV0IiwiYXVkIjoicXVhZHJpb25FcnBBUEkiLCJjbGllbnRfaWQiOiJxdWFkcmlvbi5jbGllbnQiLCJzdWIiOiJmYzBlYTU1Yy1jZDFhLTQ3N2UtYjlmYS0zN2E0YzA5M2M4ODIiLCJhdXRoX3RpbWUiOjE2Njk4NzE4MTcsImlkcCI6ImxvY2FsIiwibmFtZSI6IkF6aW0gTWFobXVkIiwiZW1haWwiOiJtYWhhbXVkLmF6aW1AZ21haWwuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInF1YWRyaW9uRXJwQVBJIl0sImFtciI6WyJmb3JtcyJdfQ.lXRooKs22V16nuqOvYQ_AaK7IJSX0vU-Hy8ND55D2iN8czye1eeB9Mhse7P1IW1zU03ESG7I1ksiTcJpBPpsh-Hvjd2kZFMGBJahE0uG3TVk9hJ3sZXr85JnbzCMxc3YmJ2GehxuaBpxtcx6Ig7izLLriGsJYf8ImPQt5kLPfxLje780zuyUB64ICW_nqxtHbXabeAO3UWPc0-PwBbD-N3CZCsGlohDaK4MykRiVdDg8LzYiia5tb6u7PA_uEkY-Tt-rMxBpj0QG-lU5ProVAeOFY1_KdDTp-xTuCnNwOhwjJ_KGwQ1PxpI2FbYmjRVJrRC_IiGW3LKOhMGNpDw3Lg";

if ( accessToken ) {
  merchandisingAxios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
}