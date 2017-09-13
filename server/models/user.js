module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Oops. An account already exist with this username',
        // fields: [sequelize.fn('lower', sequelize.col('email'))]
      },
      validate: {
        len: {
          args: [5, 10],
          msg: 'Username must be btw 3 - 10 characters'
        },
        is: {
          args: /^[A-Za-z][A-Za-z0-9-]+$/i,
          msg: 'Username must start with a letter, have no spaces'
        }
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: `Oops.The email you entered already exists`,
        // fields: [sequelize.fn('lower', sequelize.col('email'))]
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is not valid',
        },
        max: {
          args: 254,
          msg: 'The email you entered is invalid or longer than 254 characters.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: 'The password you entered is less than 3 characters'
        },
      },
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Recipe, {
      foreignKey: 'userId',
      as: 'recipes',
    });

    User.hasMany(models.Favorite, {
      foreignKey: 'userId',
      as: 'favorites',
    });
  };

  return User;
};

