declare module 'better-sqlite3' {
  type SqliteStatement = {
    readonly reader: boolean;
    all(parameters: ReadonlyArray<unknown>): unknown[];
    run(parameters: ReadonlyArray<unknown>): {
      changes: number | bigint;
      lastInsertRowid: number | bigint;
    };
    iterate(parameters: ReadonlyArray<unknown>): IterableIterator<unknown>;
  };

  export default class Database {
    constructor(filename: string);
    close(): void;
    prepare(sql: string): SqliteStatement;
  }
}
