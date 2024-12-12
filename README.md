# SaaS Product Backend

A robust backend server for a SaaS product built with Node.js, Express, and MongoDB.

## Features

- User Authentication (Register, Login, Password Reset)
- JWT-based Authorization
- Role-based Access Control
- MongoDB Integration
- Security Features (Rate Limiting, CORS, Helmet)
- Input Validation
- Error Handling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gagandharmgond17/FILE---EXPLORER.git
```

2. Install dependencies:
```bash
cd FILE---EXPLORER
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration.

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- `GET /api/auth/verify-email/:token` - Verify email

## Security

- Password hashing with bcrypt
- JWT token authentication
- Rate limiting
- Security headers with Helmet
- Input validation
- Environment variable configuration

## License

MIT
