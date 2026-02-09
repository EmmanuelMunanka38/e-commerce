-- Initialize database with proper settings
-- This script runs when the PostgreSQL container starts for the first time

-- Set timezone
SET timezone = 'UTC';

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Log initialization
SELECT 'Marketplace database initialized successfully' as status;