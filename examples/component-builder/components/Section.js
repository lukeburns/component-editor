import PropTypes from 'prop-types'

const React = require('react')
const Form = require('./Form')
const Description = require('./Description')
const DocumentAttach = require('./DocumentAttach')
const Widgets = require('../widgets')
const { TreeEditor, withProps } = require('../../../src')

const Title = ({ title }) => <h1>{title}</h1>
const Section = ({ title = ``, children = [] }) => (
  <section>
    <Title title={title} />
    {children}
  </section>
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

Section.Widgets = {
  title: Widgets.InputWidget,
  children: withProps(TreeEditor, { types: { Section, Form, Description, DocumentAttach } })
}

Section.Title = Title

module.exports = Section
