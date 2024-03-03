import renderer from 'react-test-renderer';
import GitHubCard from './GitHubCard';


test('Renders GithubCard snapshot', () => {
    const tree = renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
