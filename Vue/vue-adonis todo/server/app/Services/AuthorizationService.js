const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException')

class AuthorizationService {
    verifyPermission(resource, user) {
        // console.log(resource);
        // console.log(resource.user_id, user.id);
        if (!resource) {
            throw new ResourceNotExistException;
        }
        if (resource.user_id != user.id) {
            throw new InvalidAccessException;
        }
    }
}

module.exports = new AuthorizationService
