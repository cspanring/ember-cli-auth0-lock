[![Build Status](https://codeship.com/projects/5117ca70-6461-0132-e7fa-5e824c005685/status)](https://codeship.com/projects/52576)

# Ember-cli-auth0-lock

Add basic support for the [Auth0] authentication services to your Ember CLI project.

This addon **requires** an [Auth0] account and application.


## Installation

    npm install --save-dev ember-cli-auth0-lock
    ember generate ember-cli-auth0-lock

The addon will add following elements to your CLI project:

* the `auth0-lock` bower dependency
* an `initializer` that will inject an `auth0` property with user data and a wrapper around `auth0-lock` methods on controllers and routes
* 3 actions to your application route: `login`, `signup` and `logout`
* a mixin to require authentication on routes:
 
        import Auth0Protection from 'ember-cli-auth0-lock/mixins/auth0-protection';
        export default Ember.Route.extend(Auth0Protection, {
            ...
        });


## Usage

Before you can use the addon, you need to add your Auth0 **ClientID** and **Domain** to the environment configuration in `./config/environment.js`:

    'ember-cli-auth0-lock': {

      // [required] Auth0 credentials
      cid: 'MyAuth0ClientId',
      domain: 'myaccount.auth0.com',

      // [required] redirect from Auth0 when a user logs out
      logoutUrl: 'http://mydomain.com/logout',

      // [optional] Auth0 Lock authentication options
      authParams: {
        scope: 'openid user_id email nickname picture'
      },

      // [optional] Auth0 Lock CDN url, used in production build
      cdnUrl: 'http://cdn.auth0.com/js/lock-6.min.js'

    }

Please see the [Auth0 docs] for more information on the [authParams] configuration object.


## Development

The **dummy** application in `./tests/dummy` contains an example integration of the addon for testing.

### Installation

    git clone https://github.com/cspanring/ember-cli-auth0-lock.git
    npm install
    bower install

### Running

    ember server

Visit the dummy app at [http://localhost:4200](http://localhost:4200).

### Running Tests

    ember test
    ember test --server


For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

[Auth0]: https://auth0.com
[Auth0 docs]: https://docs.auth0.com
[authParams]: https://github.com/auth0/lock/wiki/Auth0Lock-customization#authparams-object
