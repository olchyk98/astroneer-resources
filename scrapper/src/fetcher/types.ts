export interface GenericFetchOpts {
  /**
   * By default fetch functions utilize
   * predefined cache. By setting this function
   * to "remote", the functions will bypass
   * cache and perform direct call to the remote wiki.
   *
   * "cache" - only use cached articles, fail if key/url is not cached.
   * "remote" - only use remote articles, fail if host doesn't respond.
   *
   * NOTE: "predefined" articles will still
   * be used, as they cannot be fetched, nor cached.
   * */
  strategy?: 'cache' | 'remote'
}
