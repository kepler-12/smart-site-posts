module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    content: DataTypes.JSON
  })
  return Post
}
