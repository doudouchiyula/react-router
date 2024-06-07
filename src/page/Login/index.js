import { Link, useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      我是登录页
      <Link to={'/article'}>去往文章页</Link>
      <button onClick={() => navigate('/article')}>编程式导航-跳转到文章页</button>
      {/* <button onClick={() => navigate('/article?id=123&name=jack')}>searchParams传参</button> */}
      <button onClick={() => navigate('/article/1234')}>params传参</button>
    </div>
  )
}

export default Login