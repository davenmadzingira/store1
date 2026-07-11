export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      affiliate_clicks: {
        Row: {
          created_at: string
          id: string
          ip_hash: string | null
          product_id: string
          referred_by_code: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          ip_hash?: string | null
          product_id: string
          referred_by_code?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          ip_hash?: string | null
          product_id?: string
          referred_by_code?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_clicks_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      affiliate_conversions: {
        Row: {
          affiliate_code: string
          click_id: string | null
          commission_cents: number
          created_at: string
          id: string
          order_value_cents: number
          product_id: string
          status: string
        }
        Insert: {
          affiliate_code: string
          click_id?: string | null
          commission_cents?: number
          created_at?: string
          id?: string
          order_value_cents?: number
          product_id: string
          status?: string
        }
        Update: {
          affiliate_code?: string
          click_id?: string | null
          commission_cents?: number
          created_at?: string
          id?: string
          order_value_cents?: number
          product_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_conversions_click_id_fkey"
            columns: ["click_id"]
            isOneToOne: false
            referencedRelation: "affiliate_clicks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_conversions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author_id: string | null
          content_md: string
          cover_image_url: string | null
          created_at: string
          excerpt: string | null
          id: string
          published_at: string | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          content_md?: string
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          content_md?: string
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          is_read: boolean
          message: string
          name: string
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_read?: boolean
          message: string
          name: string
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_read?: boolean
          message?: string
          name?: string
          subject?: string | null
        }
        Relationships: []
      }
      coupons: {
        Row: {
          code: string
          created_at: string
          description: string | null
          discount_type: string
          discount_value: number
          expires_at: string | null
          id: string
          is_active: boolean
          max_redemptions: number | null
          min_order_cents: number
          starts_at: string
          times_redeemed: number
        }
        Insert: {
          code: string
          created_at?: string
          description?: string | null
          discount_type: string
          discount_value: number
          expires_at?: string | null
          id?: string
          is_active?: boolean
          max_redemptions?: number | null
          min_order_cents?: number
          starts_at?: string
          times_redeemed?: number
        }
        Update: {
          code?: string
          created_at?: string
          description?: string | null
          discount_type?: string
          discount_value?: number
          expires_at?: string | null
          id?: string
          is_active?: boolean
          max_redemptions?: number | null
          min_order_cents?: number
          starts_at?: string
          times_redeemed?: number
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          download_count: number
          download_limit: number
          download_token: string | null
          id: string
          order_id: string
          price_cents_snapshot: number
          product_id: string
          quantity: number
          title_snapshot: string
        }
        Insert: {
          created_at?: string
          download_count?: number
          download_limit?: number
          download_token?: string | null
          id?: string
          order_id: string
          price_cents_snapshot: number
          product_id: string
          quantity?: number
          title_snapshot: string
        }
        Update: {
          created_at?: string
          download_count?: number
          download_limit?: number
          download_token?: string | null
          id?: string
          order_id?: string
          price_cents_snapshot?: number
          product_id?: string
          quantity?: number
          title_snapshot?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          affiliate_ref: string | null
          coupon_id: string | null
          created_at: string
          currency: string
          discount_cents: number
          email: string
          id: string
          paid_at: string | null
          payment_intent_id: string | null
          payment_provider: string | null
          status: string
          subtotal_cents: number
          total_cents: number
          user_id: string | null
        }
        Insert: {
          affiliate_ref?: string | null
          coupon_id?: string | null
          created_at?: string
          currency?: string
          discount_cents?: number
          email: string
          id?: string
          paid_at?: string | null
          payment_intent_id?: string | null
          payment_provider?: string | null
          status?: string
          subtotal_cents: number
          total_cents: number
          user_id?: string | null
        }
        Update: {
          affiliate_ref?: string | null
          coupon_id?: string | null
          created_at?: string
          currency?: string
          discount_cents?: number
          email?: string
          id?: string
          paid_at?: string | null
          payment_intent_id?: string | null
          payment_provider?: string | null
          status?: string
          subtotal_cents?: number
          total_cents?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_coupon_id_fkey"
            columns: ["coupon_id"]
            isOneToOne: false
            referencedRelation: "coupons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pending_paypal_orders: {
        Row: {
          affiliate_ref: string | null
          coupon_code: string | null
          created_at: string
          email: string
          id: string
          lines: Json
          paypal_order_id: string
          user_id: string | null
        }
        Insert: {
          affiliate_ref?: string | null
          coupon_code?: string | null
          created_at?: string
          email: string
          id?: string
          lines: Json
          paypal_order_id: string
          user_id?: string | null
        }
        Update: {
          affiliate_ref?: string | null
          coupon_code?: string | null
          created_at?: string
          email?: string
          id?: string
          lines?: Json
          paypal_order_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pending_paypal_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          affiliate_commission_pct: number | null
          affiliate_url: string | null
          category_id: string | null
          compare_at_cents: number | null
          cover_image_url: string | null
          created_at: string
          currency: string
          description: string
          file_path: string | null
          file_size_bytes: number | null
          gallery_urls: string[]
          id: string
          price_cents: number
          search_vector: unknown
          seo_description: string | null
          seo_title: string | null
          short_description: string
          slug: string
          status: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          affiliate_commission_pct?: number | null
          affiliate_url?: string | null
          category_id?: string | null
          compare_at_cents?: number | null
          cover_image_url?: string | null
          created_at?: string
          currency?: string
          description?: string
          file_path?: string | null
          file_size_bytes?: number | null
          gallery_urls?: string[]
          id?: string
          price_cents?: number
          search_vector?: unknown
          seo_description?: string | null
          seo_title?: string | null
          short_description?: string
          slug: string
          status?: string
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          affiliate_commission_pct?: number | null
          affiliate_url?: string | null
          category_id?: string | null
          compare_at_cents?: number | null
          cover_image_url?: string | null
          created_at?: string
          currency?: string
          description?: string
          file_path?: string | null
          file_size_bytes?: number | null
          gallery_urls?: string[]
          id?: string
          price_cents?: number
          search_vector?: unknown
          seo_description?: string | null
          seo_title?: string | null
          short_description?: string
          slug?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          affiliate_code: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          is_admin: boolean
        }
        Insert: {
          affiliate_code?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          is_admin?: boolean
        }
        Update: {
          affiliate_code?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          is_admin?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

// ----------------------------------------------------------------------
// Everything below this line is hand-written, not generated by the
// Supabase CLI. Re-running `supabase gen types` only touches the code
// above, so this section is safe to keep across regenerations — just
// re-paste it back on if you ever regenerate this file from scratch.
// ----------------------------------------------------------------------

// Convenience row-type aliases, so app code can write `Product` instead
// of `Database['public']['Tables']['products']['Row']`.
export type Profile = Tables<'profiles'>
export type Category = Tables<'categories'>
export type Product = Tables<'products'>
export type Coupon = Tables<'coupons'>
export type Order = Tables<'orders'>
export type OrderItem = Tables<'order_items'>
export type AffiliateClick = Tables<'affiliate_clicks'>
export type AffiliateConversion = Tables<'affiliate_conversions'>
export type BlogPost = Tables<'blog_posts'>
export type ContactMessage = Tables<'contact_messages'>
export type PendingPaypalOrder = Tables<'pending_paypal_orders'>

// These columns are stored as plain `text` in Postgres (not native enums),
// so the generated types above correctly show them as `string`. These
// unions are for app-level code that wants to narrow/validate the value
// (e.g. `status: OrderStatus` on a variable you've already checked),
// not for typing the raw DB row itself.
export type ProductType = 'digital' | 'affiliate'
export type ProductStatus = 'draft' | 'published' | 'archived'
export type OrderStatus = 'pending' | 'paid' | 'failed' | 'refunded'
export type PaymentProvider = 'stripe' | 'paypal'
export type DiscountType = 'percent' | 'fixed'
export type ConversionStatus = 'pending' | 'approved' | 'paid' | 'rejected'
export type BlogStatus = 'draft' | 'published'

// pending_paypal_orders.lines is stored as jsonb, so Supabase types it as
// the broad `Json` type. This is the actual shape the app puts in there —
// use it to cast when reading the column back out, e.g.:
//   const lines = pending.lines as PendingPaypalOrderLines
export type PendingPaypalOrderLines = { productId: string; quantity: number }[]

// ----- Cart (client-side only, not persisted to DB until checkout) -----
export interface CartItem {
  productId: string
  slug: string
  title: string
  priceCents: number
  imageUrl: string | null
  quantity: number
}
