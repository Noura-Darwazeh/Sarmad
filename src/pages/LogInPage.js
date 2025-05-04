import { useState } from "react";
import styled from "styled-components";
import googleIcon from "../assets/loginPage/google.png";
import facebookIcon from "../assets/loginPage/facebook.png";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: 12px;
  background-color: rgba(172, 148, 212, 0.6);
  color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const LoginHeader = styled.div`
  text-align: right;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  color: #613084;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
  text-align: right;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid rgba(167, 139, 250, 0.3);
  background-color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  text-align: right;
`;

const ForgotPassword = styled.div`
  text-align: right;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  color: #613084;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${(props) => props.theme.colors.white};
`;

const Divider = styled.div``;

const DividerSpan = styled.span`
  padding: 0 8px;
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const GoogleButton = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.colors.white};
  color: #333333;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.2s;
`;

const FacebookButton = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.colors.white};
  color: #333333;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.2s;
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم تقديم النموذج:", { email, password });
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader>
          <Title>تسجيل الدخول</Title>
          <Subtitle>مرحبًا بكم في متجر أصول الألعاب</Subtitle>
        </LoginHeader>

        <LoginForm onSubmit={handleSubmit} dir="rtl">
          <FormGroup>
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">كلمة المرور</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <ForgotPassword>
            <Link href="#">هل نسيت كلمة المرور؟</Link>
          </ForgotPassword>

          <LoginButton type="submit">تسجيل الدخول</LoginButton>

          <Divider>
            <DividerSpan>أو سجل الدخول باستخدام :</DividerSpan>
          </Divider>

          <SocialButtons>
            <GoogleButton>
              Continue with Google
              <SocialIcon src={googleIcon} alt="Google" />
            </GoogleButton>

            <FacebookButton>
              Continue with Facebook
              <SocialIcon src={facebookIcon} alt="Facebook" />
            </FacebookButton>
          </SocialButtons>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
}
