# This project is no longer maintained. Please use the official [auth0-ember-simple-auth](https://github.com/auth0/auth0-ember-simple-auth) addon instead.

[![Build Status](https://codeship.com/projects/5117ca70-6461-0132-e7fa-5e824c005685/status)](https://codeship.com/projects/52576)

# Ember-cli-auth0-lock

This addon wraps the [Auth0 Lock] library and adds basic support for the [Auth0] authentication service to an Ember CLI project. It **requires** an [Auth0] account and application to be setup.

A simple Ember CLI example using this addon is available at: [http://ember-cli-auth0-lock.divshot.io](http://ember-cli-auth0-lock.divshot.io/)

## Installation

    npm install --save-dev ember-cli-auth0-lock
    ember generate ember-cli-auth0-lock

The addon will add following elements to your CLI project:

* the `auth0-lock` bower dependency
* an `initializer` that will inject an `auth0` property with user data and a wrapper around `auth0-lock` methods on controllers and routes
* 3 actions to your application route: `login`, `signup` and `logout`
* a mixin to *protect* routes with authentication:


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


### Route mixin

Use the `auth0-protection` mixin to require an authentication on a route:

    import Ember from 'ember';
    import Auth0Protection from 'ember-cli-auth0-lock/mixins/auth0-protection';

    export default Ember.Route.extend(Auth0Protection, {
      model: function() {
        return ['This', 'is', 'a', 'protected', 'route'];
      }
    });

*Note: current protection is naive in terms of that it just redirects the app to the root url if the current user is not authenticated.*

*Also: an authentication check on the client won't protect any sensible data that you might serve in your application.*


### Signup, login and logout actions

The `application route` will catch any `signup`, `login` and `logout` actions that bubble up and call the corresponding method on the Lock Widget.

E.g. trigger the `login` action from a template:

    <button {{action 'login'}}>login</button>


### Authentication status and data

Routes and controllers expose following properties in an `auth0` object:

    auth0: {

      // is current user authenticated, anonymous
      isAuthed: <bool>,
      isAnonymous: <bool>,

      // Auth0 user profile (can be customized in authParams.scope)
      profile: {
        user_id: <string>
        nickname: <string>
        email: <string>
        picture: <string>
      },

      // Auth0 access token
      token: <string>

    }


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
[Auth0 Lock]: https://github.com/auth0/lock
[Auth0 docs]: https://docs.auth0.com
[authParams]: https://github.com/auth0/lock/wiki/Auth0Lock-customization#authparams-object
