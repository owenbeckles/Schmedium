'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      // references: { model: 'Users' }
    },
    storyImage: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
    Story.belongsTo(models.User, { foreignKey: 'userId'});
    Story.hasMany(models.Like, { foreignKey: 'storyId'});
  };
  return Story;
};