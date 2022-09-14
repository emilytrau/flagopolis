export interface DatabaseConnector {
  start: () => Promise<void>;
}
